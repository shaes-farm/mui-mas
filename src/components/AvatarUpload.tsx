import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export interface AvatarUploadProps {
  id: string
  url: string
  size: number
  onUpload: (url: string) => void
  onError: (msg: string) => void
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({id, url, size, onUpload, onError}) => {
  const [avatarUrl, setAvatarUrl] = useState<string|null>(null)
  const [uploading, setUploading] = useState(false)
  const supabase = useSupabaseClient();
  
  useEffect(() => {
    async function download() {
      if (url) {
        const blobUrl = await downloadAvatar(url)
        setAvatarUrl(blobUrl);
      }
    }
    download();
  }, [url, supabase]);

  const downloadAvatar = async (path: string) => {
    let avatarObjectUrl: string|null = null;
  
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);
      if (error) {
        throw error;
      }
      if (data) {
        avatarObjectUrl = URL.createObjectURL(data);
      }
    } catch (storageError) {
      console.error({storageError});
    }
  
    return avatarObjectUrl;
  };
  
  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    setUploading(true)
    try {

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${id}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log(`Uploading ${file.name} as ${filePath}`);

      const { error } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (error) {
        throw error;
      }

      onUpload(filePath);
    } catch (uploadError) {
      console.log({uploadError})
      onError(String(uploadError));
    } finally {
      setUploading(false)
    }
  }

  return (
    <Grid container spacing={0} sx={{ width: "100%", mx: "auto" }}>
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
        <Avatar
          alt="Avatar"
          src={avatarUrl ?? undefined}
          sx={{ width: size, height: size, mt: 1 }}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
        <LoadingButton
          loading={uploading}
          variant="outlined"
          color="inherit"
          component="label"
          loadingPosition="start"
          startIcon={<CameraAltOutlinedIcon />}
          sx={{ mt: 1, mb: 2 }}
        >
          Upload
          <input hidden accept="image/*" type="file" onChange={uploadAvatar} disabled={uploading} />
        </LoadingButton>
      </Grid>
    </Grid>
  )
};

export default AvatarUpload;
