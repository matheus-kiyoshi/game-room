import { FaGithub } from 'react-icons/fa'

export default function GitHubIcon() {
  return (
    <div className="w-full mt-2 mb-6 flex justify-center items-center">
      <a href="https://github.com/matheus-kiyoshi" target="_blank">
        <FaGithub className="w-8 h-8 text-white hover:text-purple-700 cursor-pointer transition-colors" />
      </a>
    </div>
  )
}
