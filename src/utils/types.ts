import React, { ElementType, JSX } from 'react'
import { UseFormSetValue } from 'react-hook-form'

export type TSXComponent = JSX.Element

export interface Props {
  className?: string | null
  children?: React.ReactNode
}

export interface IconProps extends Props {
  id: string
}

export interface ButtonRatingProps extends Props {
  value: number
  rating: number
  onClick: () => void
}

export interface ButtonSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  load?: boolean
}

export interface ButtonNavProps extends Props {
  id: string
  to: string
}

export interface ButtonUnderlineProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType
  to?: string | null
}

export interface HeadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
}

export interface ImageUploaderProps extends Props {
  id?: string
  value?: string | File
  onChange?: (file: File) => void
  onClick?: () => void
}

export interface DialogProps extends Props {
  open: boolean
  onClose: (value: React.SetStateAction<boolean>) => void
}

export interface DialogDismissalProps extends DialogProps {
  employee: string
}

export interface DialogEventProps extends DialogProps {
  item?: {
    src?: string | undefined
    date: string
    title: string
    text: string
    url?: string
  }
  openResult?: () => void
}

export interface DialogRatingProps extends DialogProps {
  item: {
    name: string
    period: string
  }
}

export interface DialogRecoverProps extends DialogProps {
  employee: string
}

export interface DialogRemoveProps extends DialogProps {
  data: string
}

export interface DialogResultProps extends DialogProps {
  result: boolean
}

export interface DialogStaffProps extends DialogProps {
  openResult?: () => void
}

export interface TableProps extends Props {
  minWidth?: string | undefined
}

export type DataForm = {
  [index: string]: string | number | boolean | File | undefined
}

export interface BreadCrumbsProps extends Props {
  routes: {
    path: string
    breadcrumb: string
  }[]
}

export type SetImage = string | File | undefined

export type CalendarPiece = Date | null
export type CalendarDate = CalendarPiece | [CalendarPiece, CalendarPiece]

export interface InputCalendarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  date?: CalendarDate
  setValue?: UseFormSetValue<DataForm>
}

export interface SelectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  value?: string
}

export interface ThemeContextProps {
  themeValue: boolean
  themeToggle: () => void
  color: string
  changeColor(value: string): void
}

export type LazyComponent = React.LazyExoticComponent<() => TSXComponent>

export type LazyDefault = {
  default: () => TSXComponent
}

export type LazyPromise = Promise<LazyDefault | LazyDefault>

export type StaffType = {
  to: string
  src?: string | undefined
  name: string
  work: string
  status: boolean
  date: string
}

export type DutyType = {
  src?: string | undefined
  name: string
  work: string
  period: string
  rating: number
  active: boolean
  checked: boolean
}

export type TimeType = {
  name: string
  dates: {
    value: number
    weekend: boolean
  }[]
}

export type EventsType = {
  to: string
  src?: string | undefined
  date: string
  title: string
  text: string
}
