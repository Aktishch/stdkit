import { Outlet } from 'react-router-dom'
import { Section } from '@views/lk/components/Section'
import { Content } from '@views/lk/components/Content/Content'
import { ContentPrimary } from '@views/lk/components/Content/ContentPrimary'
import { Sidebar } from '@views/lk/components/Sidebar/Sidebar'
import { SidebarLink } from '@views/lk/components/Sidebar/SidebarLink'

export const LayoutStudentDetail = () => {
  return (
    <Section>
      <Content>
        <Sidebar
          webp="/img/pictures/user.webp"
          src="/img/pictures/user.jpg"
          userName="Константинов Константин"
          userPost="Куратор, веб-дизайн"
        >
          <SidebarLink id="settings" to="/lk-tutor/students/datail">
            Данные студента
          </SidebarLink>
        </Sidebar>
        <ContentPrimary>
          <Outlet />
        </ContentPrimary>
      </Content>
    </Section>
  )
}
