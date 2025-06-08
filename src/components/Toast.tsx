import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/lib/hooks"
import { RootState } from "@/lib/store"
import { deleteToast } from "@/lib/features/toast/toast"

export default function Toast() {

  const dispatch = useAppDispatch()
  const toast = useSelector((state: RootState) => state.toast)

  useEffect(() => {

    if(toast.length === 0) return

    const interval = setInterval(() => {

      const now = new Date()
      toast.forEach((toast) => {
        if (toast.expiresAt && new Date(toast.expiresAt) <= now) {
          dispatch(deleteToast(toast.id))
        }
      })
    }, 500)

    return () => clearInterval(interval)

  }, [toast])

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 text-sm">
      {toast.map((t, i) => (
        <div key={i} className={`badge badge--info`}>
          <div className="flex items-center gap-5">
            <div className="flex-1">
              {t.message}
            </div>
            <button
              className="p-2 aspect-square w-8 h-8 rounded-full flex items-center justify-center bg-[#ddd] hover:bg-[#ccc] animated"
              onClick={() => dispatch(deleteToast(t.id))}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}