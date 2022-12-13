export interface IDialogConfirm {
  title: string
  description: string
  action: string
  color: 'primary' | 'accent' | 'warn'
  onlyConfirm: true
}
