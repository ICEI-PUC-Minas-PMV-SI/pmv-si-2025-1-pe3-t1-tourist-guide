'use client'
import AppLogo from "@/components/AppLogo";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {register} from "@/actions/register";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errors, setErrors] = useState<Record<string, string>>({})

  const submit = async () => {
    if (!name) {
      return setErrors({
        name: 'O nome é obrigatório'
      })
    }

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
        password: 'A senha é obrigatória'
      })
    }

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword: 'As senhas não conferem'
      })
    }

    setErrors({})

    try {
      await register(name, email, password)

      toast.success('Conta criada com sucesso!')

      router.push('/home')
    }catch (err) {
      console.error(err)
      toast.error('Ocorreu um erro ao tentar criar a conta. Tente novamente mais tarde.')
    }
  }

  return <div className={"h-full flex flex-col py-24 justify-center items-center overflow-y-auto"}>
    <div className={"flex flex-col max-w-[500px] w-[90%] items-stretch"}>
      <Link className={"flex text-slate-900! decoration-none! mb-4"} href={'/'}>
        <Image width={24} height={24} src={"arrow-left.svg"} alt={"Go Back"}/>
        Voltar
      </Link>

      <AppLogo />
      <span className={"font-bold text-[24px] mt-12 text-center"}>Criar uma conta</span>
      <span className={"text-slate-500 text-center max-w-[280px] align-self-center mt-2"}>Preencha os dados abaixo para se cadastrar</span>
      <div className={"flex flex-col gap-6 mt-8"}>
        <div>
          <Form.Label htmlFor="name" className={"font-[500]"}>Nome</Form.Label>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={'Nome completo'}
            id="name"
          />
          {errors.name && <Form.Text className={"text-red-500! mt-2"}>{errors.name}</Form.Text>}
        </div>

        <div>
          <Form.Label htmlFor="email" className={"font-[500]"}>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={'Seu email'}
            type="email"
            id="email"
          />
          {errors.email && <Form.Text className={"text-red-500! mt-2"}>{errors.email}</Form.Text>}
        </div>

        <div>
          <Form.Label htmlFor="password" className={"font-[500]"}>Senha</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={'Seu email'}
            type="password"
            id="password"
          />
          {errors.password && <Form.Text className={"text-red-500! mt-2"}>{errors.password}</Form.Text>}
        </div>

        <div>
          <Form.Label htmlFor="confirmPassword" className={"font-[500]"}>Confirmar senha</Form.Label>
          <Form.Control
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder={'Confirme sua senha'}
            type={"password"}
            id="confirmPassword"
          />
          {errors.confirmPassword && <Form.Text className={"text-red-500! mt-2"}>{errors.confirmPassword}</Form.Text>}
        </div>

        <Button variant="dark" size={"lg"} onClick={submit}>Cadastrar</Button>
      </div>
    </div>
  </div>
}
