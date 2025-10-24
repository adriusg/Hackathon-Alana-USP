export default function AppHomePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Área do Aplicativo</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Escolha uma área para navegar (demo):
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="/app/gestao" className="block p-4 rounded-lg border hover:shadow-md transition">Gestão</a>
        <a href="/app/prof" className="block p-4 rounded-lg border hover:shadow-md transition">Professor</a>
        <a href="/app/aluno" className="block p-4 rounded-lg border hover:shadow-md transition">Aluno</a>
        <a href="/app/responsavel" className="block p-4 rounded-lg border hover:shadow-md transition">Responsável</a>
        <a href="/app/func" className="block p-4 rounded-lg border hover:shadow-md transition">Funcionário</a>
      </div>
    </div>
  )
}
