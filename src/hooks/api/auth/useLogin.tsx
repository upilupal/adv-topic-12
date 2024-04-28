import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import { User } from "@/types/user.type";
import { useRouter } from "next/navigation";

interface LoginArgs extends Pick<User, "email"> {
  password: string;
}

interface LoginResponse {
  message: string;
  data: User;
  token: string;
}

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const login = async (payload: Pick<User, "email">) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>("/auth/login", payload);

      dispatch(loginAction(data.data));

      localStorage.setItem("token", data.token);
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { login };
};

export default useLogin;
