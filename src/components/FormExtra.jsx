export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-2 w-2 text-myblue outline-none  border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-900">
            remember me
          </label>
        </div>

        <div className="text-xs">
          <a href="#" className="font-medium text-myblue hover:text-myred">
            mot de passe oublié?
          </a>
        </div>
      </div>

    )
}