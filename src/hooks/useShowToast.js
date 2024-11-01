import { toaster } from '../components/ui/Toaster'

const useShowToast = () => {

  const showToast = (title, description, status) => {
    toaster.create({
      type: status,
      title: title,
      description: description,
      duration: 3000,
    })
  }

  return showToast

}

export default useShowToast