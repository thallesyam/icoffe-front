import { CompanyProfile } from '../CompanyProfile'
import { UserProfile } from '../UserProfile'

export function ProfileInfo() {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-4">
          Dados do perfil
        </h2>
        <a className="text-purple-500 cursor-pointer hover:transition-all hover:text-purple-900 underline">
          Quero mudar a minha conta para empresa
        </a>
      </div>

      <UserProfile />
      {/* <CompanyProfile /> */}
    </section>
  )
}
