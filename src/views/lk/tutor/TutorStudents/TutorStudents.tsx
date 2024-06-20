import { Link } from 'react-router-dom'
import { FilteringCard } from '@providers/Filtering'
import { SectionDefault } from '@ui/SectionDefault'
import { LkHead } from '@views/lk/tutor/components/LkHead'
import { Icon } from '@ui/Icon'
import { UserAva } from '@ui/UserAva'
import { UserName } from '@ui/UserName'
import { LkTableTop } from '@views/lk/components/LkTableTop'
import { LkTableElement } from '@views/lk/components/LkTableElement'
import { StudentsFiltering } from '@views/lk/tutor/TutorStudents/components/StudentsFiltering'
import { StudentsCategory } from '@views/lk/tutor/TutorStudents/components/StudentsCategory'
import { StudentAva } from '@views/lk/tutor/TutorStudents/components/StudentAva'

export const TutorStudents = () => {
  return (
    <SectionDefault>
      <LkHead text="Добавить студента">Студенты</LkHead>
      <StudentsFiltering>
        <div className="flex items-center justify-between gap-3 border-b border-solid sm:justify-start sm:gap-10 border-grey">
          <StudentsCategory value="all">Все студенты</StudentsCategory>
          <StudentsCategory value="current">Проходят</StudentsCategory>
          <StudentsCategory value="finished">Прошли</StudentsCategory>
        </div>
        <div className="px-4 -mx-4 overflow-auto">
          <table className="block min-w-[1230px]">
            <thead className="block">
              <LkTableTop>
                <LkTableElement className="max-w-10" as="th" />
                <LkTableElement className="text-left max-w-52" as="th">
                  Студент
                </LkTableElement>
                <LkTableElement className="text-left max-w-24" as="th">
                  Сфера
                </LkTableElement>
                <LkTableElement className="text-left max-w-14" as="th">
                  ВУЗ
                </LkTableElement>
                <LkTableElement className="text-left max-w-20" as="th">
                  Статус
                </LkTableElement>
                <LkTableElement className="text-center max-w-20" as="th">
                  Проходит
                </LkTableElement>
                <LkTableElement className="text-center max-w-36" as="th">
                  Задач выполнено
                </LkTableElement>
                <LkTableElement className="text-center max-w-44" as="th">
                  Практика
                </LkTableElement>
              </LkTableTop>
            </thead>
            <tbody className="flex flex-col">
              <FilteringCard
                className="flex items-center justify-between gap-10 py-2 border-b border-solid border-grey"
                name="students"
                value="current"
                as="tr"
              >
                <LkTableElement className="max-w-10">
                  <StudentAva
                    to=""
                    webp="/img/pictures/user.webp"
                    src="/img/pictures/user.jpg"
                    icon="/img/pictures/chicken.svg"
                  />
                </LkTableElement>
                <LkTableElement className="max-w-52">
                  <Link
                    className="block underline-offset-4 hover:underline"
                    to=""
                  >
                    <UserName>Константинов Константин</UserName>
                  </Link>
                </LkTableElement>
                <LkTableElement className="max-w-24">Веб-дизайн</LkTableElement>
                <LkTableElement className="max-w-14">КубГАУ</LkTableElement>
                <LkTableElement className="max-w-20">Проходит</LkTableElement>
                <LkTableElement className="text-center max-w-20">
                  2
                </LkTableElement>
                <LkTableElement className="max-w-36">
                  <div className="flex items-center justify-center">
                    <Icon
                      className="mr-1 text-lg text-primary"
                      id="hourglass"
                    />
                    2
                  </div>
                </LkTableElement>
                <LkTableElement className="max-w-44">
                  <div className="flex items-center justify-center w-full p-2 text-base font-normal leading-4 rounded-full h-9 text-tenter bg-green-light">
                    29.08.23 - 29.08.23
                  </div>
                </LkTableElement>
              </FilteringCard>
            </tbody>
          </table>
        </div>
      </StudentsFiltering>
    </SectionDefault>
  )
}
