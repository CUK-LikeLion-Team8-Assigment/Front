import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignupForm.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
const SignupForm = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    userEmail: Yup.string()
      .email("올바른 이메일 형식이 아닙니다")
      .required("이메일을 입력하세요"),
    userId: Yup.string()
      .min(2, "아이디는 최소 2글자 이상입니다")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-={};':"|,.<>?\s]*$/,
        "아이디는 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다"
      )
      .required("아이디를 입력하세요"),
    userPw: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다")
      .max(16, "비밀번호는 최대 16자리입니다")
      .required("패스워드를 입력하세요")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-={};':"|,.<>?])[^\s]*$/,
        "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다"
      ),
    checkuserPw: Yup.string()
      .oneOf([Yup.ref("userPw"), null], "비밀번호가 일치하지 않습니다")
      .required("필수 입력 값입니다"),
  });
  const submit = async (values) => {
    const { userId, userPw, checkuserPw, userEmail } = values;
    try {
      await axios.post("http://localhost:8080/join", {
        userId,
        userPw,
        checkuserPw,
        userEmail,
      });
      toast.success(
        <h3>
          회원가입이 완료되었습니다.
          <br />
          로그인 하세요:선글라스:
        </h3>,
        {
          position: "top-center",
          autoClose: 2000,
        }
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message + ":울음:", {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <h2>회원가입</h2>
      <Formik
        initialValues={{
          userId: "",
          userPw: "",
          checkuserPw: "",
          userEmail: "",
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
        validateOnMount={true}
      >
        {({ values, handleSubmit, handleChange, errors }) => (
          <div className="signup-wrapper">
            <ToastContainer />
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="input-forms">
                <div className="input-forms-item">
                  <div className="input-label">아이디</div>
                  <TextField
                    value={values.userId}
                    name="userId"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <div className="error-message">{errors.userId}</div>
                </div>
                <div className="input-forms-item">
                  <div className="input-label">비밀번호</div>
                  <TextField
                    value={values.userPw}
                    name="userPw"
                    variant="outlined"
                    type="password"
                    onChange={handleChange}
                  />
                  <div className="error-message">{errors.userPw}</div>
                </div>
                <div className="input-forms-item">
                  <div className="input-label">비밀번호 확인</div>
                  <TextField
                    value={values.checkuserPw}
                    name="checkuserPw"
                    variant="outlined"
                    type="password"
                    onChange={handleChange}
                  />
                  <div className="error-message">{errors.checkuserPw}</div>
                </div>
                <div className="input-forms-item">
                  <div className="input-label">이메일</div>
                  <TextField
                    value={values.userEmail}
                    name="userEmail"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <div className="error-message">{errors.userEmail}</div>
                </div>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  회원가입
                </Button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default SignupForm;
