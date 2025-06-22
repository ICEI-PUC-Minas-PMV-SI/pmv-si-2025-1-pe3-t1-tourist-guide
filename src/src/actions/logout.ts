'use server'
import {deleteSession} from "@/services/session-service";
import {redirect} from "next/navigation";

export async function logout() {
  await deleteSession();
  return redirect('/')
}
