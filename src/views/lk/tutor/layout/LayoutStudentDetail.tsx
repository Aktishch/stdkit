import { Outlet } from 'react-router-dom'
import { Section } from '@views/lk/components/Section'
import { Content } from '@views/lk/components/Content/Content'
import { ContentPrimary } from '@views/lk/components/Content/ContentPrimary'
import { Sidebar } from '@views/lk/components/Sidebar/Sidebar'
import { SidebarLink } from '@views/lk/components/Sidebar/SidebarLink'
import { SidebarRemove } from '@views/lk/components/Sidebar/SidebarRemove'
import { BreadCrumbs } from '@views/lk/tutor/Students/components/BreadCrumbs'

export const LayoutStudentDetail = () => {
  return (
    <Section>
      <BreadCrumbs>Константин Константинов</BreadCrumbs>
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
          <SidebarLink id="clipboard" to="/lk-tutor/students/tasks">
            Список задач
          </SidebarLink>
          <SidebarLink id="case" to="/lk-tutor/students/portfolio">
            Портфолио студента
          </SidebarLink>
          <SidebarLink id="medal" to="/lk-tutor/students/thanks">
            Благодарности
          </SidebarLink>
          <SidebarRemove />
        </Sidebar>
        <ContentPrimary className="lg:overflow-hidden lg:pb-1">
          <Outlet />
        </ContentPrimary>
      </Content>
    </Section>
  )
}
