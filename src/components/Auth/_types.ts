/**
 * User credentials entered on the password authorization form.
 */
export interface Credentials {
  /**
   * User's email address.
   */
  email: string;
  /**
   * User's password.
   */
  password: string;
  /**
   * A boolean flag indicating whether a session cookie should be set.
   */
  remember: boolean;
}

/**
 * User email entered on the password recovery form.
 */
 export interface RecoverPasswordInfo {
  email: string
}

/**
 * User credentials entered on the account sign-up form.
 */
 export interface SignUpInfo {
  firstName: string
  lastName: string
  email: string
  password: string
}
