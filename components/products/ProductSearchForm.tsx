"use client"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { z } from "zod"

const SearchSchema = z.object({
  search: z.string().trim().min(1, 'La búsqueda no puede ir vacía')
})

export default function ProductSearchForm() {

  const router = useRouter()

  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get('producto')
    }
    const result = SearchSchema.safeParse(data)
    console.log(result);
    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })
      return
    }
    router.push(`/admin/products/search?search=${result.data.search}`)
  }
  
  
  return (
    <form action={handleSearchForm}
      className="flex items-center"
    >
      <input type="text"
        name="producto"
        placeholder="Buscar Producto"
        className="p-2 placeholder-gray-400 w-full"
      />

      <input type="submit" 
        value={'buscar'}
        className="bg-indigo-500 p-2 uppercase text-white cursor-pointer"
      />
    </form>
  )
}
