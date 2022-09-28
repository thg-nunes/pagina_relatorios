import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home(){
  const { push } = useRouter()

  useEffect(() => {
    async function redirectLoginPage () {
      await push('/login')
    }

    redirectLoginPage()
  }, [])

  return null
}
