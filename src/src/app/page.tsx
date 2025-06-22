"use client"
import {Button, Form} from "react-bootstrap";
import Link from "next/link";
import AppLogo from "@/components/AppLogo";
import {useState} from "react";
import {login} from "@/actions/login";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState<Record<string, string>>({})

  const submit = async () => {
    if (!email) {
      return setErrors({
        email: 'O email é obrigatório'
      })
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      return setErrors({
        email: 'O email deve ser válido'
      })
    }

    if (!password) {
      return setErrors({
        password: 'A senha é obrigatório'
      })
    }

    setErrors({})

    try {
      const res = await login(email, password)

      if (res.error) {
        return setErrors({
          general: res.error
        })
      }

      toast.success('Login realizado com sucesso!')

      router.push('/home')
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.')
    }
  }

  return (
    <div className="flex flex-col items-center h-full">
      <div className={"flex flex-col w-[500px] items-stretch justify-center flex-1"}>
        <AppLogo />

        <Form.Label htmlFor="email" className={"font-[500] mt-12"}>Email</Form.Label>
        <Form.Control
          placeholder={'Seu email'}
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <Form.Text className={"text-red-500! mt-2"}>{errors.email}</Form.Text>}

        <Form.Label htmlFor="senha" className={"font-[500] mt-6"}>Senha</Form.Label>
        <Form.Control
          placeholder={'Sua senha'}
          type="password"
          id="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errors.password && <Form.Text className={"text-red-500! mt-2"}>{errors.password}</Form.Text>}

        {errors.general && <span className={"text-red-500 mt-6"}>{errors.general}</span>}

        <Button variant="dark" className={"mt-8!"} size={"lg"} onClick={submit}>Entrar</Button>

        <span className={"text-slate-500 mt-4 align-self-center"}>Não tem uma conta? <Link href={"/cadastro"} className={"text-slate-900! decoration-none"}>Criar um login</Link></span>
      </div>
    </div>
  );
}
