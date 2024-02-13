'use server'
import { revalidatePath } from 'next/cache'
 
export async function marketrefresh() {
  // await submitForm()
  revalidatePath('/markets/overview')
} 
export default async function submit() {
//   await submitForm()
  revalidatePath('/profile')
}
