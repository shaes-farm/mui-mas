import React from 'react';
import {styled} from '@mui/material/styles';

export interface FormProps {
  /**
   * Comma-separated content types the server accepts.
   */
  accept?: string
  /**
   * Space-separated character encodings the server accepts. The browser uses them in the order in which they are listed. The default value means the same encoding as the page. (In previous versions of HTML, character encodings could also be delimited by commas.)
   */
  acceptCharset?: string
  /**
   * A nonstandard attribute used by iOS Safari that controls how textual form elements should be automatically capitalized. autocapitalize attributes on a form elements override it on <form>. Possible values:
   *   - none: No automatic capitalization.
   *   - sentences (default): Capitalize the first letter of each sentence.
   *   - words: Capitalize the first letter of each word.
   *   - characters: Capitalize all characters — that is, uppercase.
   */
  autocapitalize?: "none" | "sentences" | "words" | "characters"
  /**
   * Indicates whether input elements can by default have their values automatically completed by the browser. autocomplete attributes on form elements override it on <form>. Possible values:
   *   - off: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see The autocomplete attribute and login fields.)
   *   - on: The browser may automatically complete entries.
   */
  autoComplete?: "off" | "on"
  /**
   * The name of the form. The value must not be the empty string, and must be unique among the form elements in the forms collection that it is in, if any.
   */
  name?: string
  /**
   * Controls the annotations and what kinds of links the form creates. Annotations include external, nofollow, opener, noopener, and noreferrer. Link types include help, prev, next, search, and license. The rel value is a space-separated list of these enumerated values.
   */
  rel?: string
  /**
   * The URL that processes the form submission. This value can be overridden by a formaction attribute on a <button>, <input type="submit">, or <input type="image"> element. This attribute is ignored when method="dialog" is set.
   */
  action?: string
  /**
   * If the value of the method attribute is post, enctype is the MIME type of the form submission. Possible values:
   *   - application/x-www-form-urlencoded: The default value.
   *   - multipart/form-data: Use this if the form contains <input> elements with type=file.
   *   - text/plain: Useful for debugging purposes.
   * This value can be overridden by formenctype attributes on <button>, <input type="submit">, or <input type="image"> elements.
   */
  enctype?: string
  /**
   * The HTTP method to submit the form with. The only allowed methods/values are (case insensitive):
   *   - post: The POST method; form data sent as the request body.
   *   - get (default): The GET; form data appended to the action URL with a ? separator. Use this method when the form has no side effects.
   *   - dialog: When the form is inside a <dialog>, closes the dialog and causes a submit event to be fired on submission, without submitting data or clearing the form.
   * This value is overridden by formmethod attributes on <button>, <input type="submit">, or <input type="image"> elements.
   */
  method?: "get" | "post" | "dialog"
  /**
   * This Boolean attribute indicates that the form shouldn't be validated when submitted. If this attribute is not set (and therefore the form is validated), it can be overridden by a formnovalidate attribute on a <button>, <input type="submit">, or <input type="image"> element belonging to the form.
   */
  novalidate?: boolean
  /**
   * Indicates where to display the response after submitting the form. It is a name/keyword for a browsing context (for example, tab, window, or iframe). The following keywords have special meanings:
   *   - _self (default): Load into the same browsing context as the current one.
   *   - _blank: Load into a new unnamed browsing context. This provides the same behavior as setting rel="noopener" which does not set window.opener.
   *   - _parent: Load into the parent browsing context of the current one. If no parent, behaves the same as _self.
   *   - _top: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as _self.
   * This value can be overridden by a formtarget attribute on a <button>, <input type="submit">, or <input type="image"> element.
   */
  target?: "_self" | "_blank" | "_parent" | "_top"
  /**
   * A React node (an element, a string, a number, a portal, an empty node like null, undefined and booleans, or an array of other React nodes). Specifies the content inside the component. When you use JSX, you will usually specify the children prop implicitly by nesting tags like <div><span /></div>.
   * @see https://react.dev/reference/react-dom/components/common#common-props
   */
  children?: React.ReactNode
  /**
   * An Event handler function. Fires when a form gets submitted.
   */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export const FormBase: React.FC<FormProps> = ({children, ...formProps}) => {
  return (
    <form {...formProps}>
      {children}
    </form>
  );
}

export const Form = styled(FormBase)({});

export default Form;
