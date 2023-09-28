import { useForm, type FieldValues } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const onSubmit = (data: FieldValues) => {
  alert(JSON.stringify(data));
};

export default function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          {...register("userName", {
            required: "user name is required",
            minLength: {
              value: 2,
              message: "password most be minimum 2 characters",
            },
          })}
          type="text"
          placeholder="Enter UserName"
        />
        {errors.userName && (
          <ErrorMessage
            errors={errors}
            name="userName"
            render={({ message }) => <p>{message}</p>}
          />
        )}
      </div>
      <div>
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "email must be correct",
            },
          })}
          type="email"
          placeholder="Enter Email"
        />
        {errors.email && (
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p>{message}</p>}
          />
        )}
      </div>
      <div>
        <input
          {...register("password", {
            required: "password is required",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&()*-+=]).+$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, and one special character (@, $, !, %, *, #, (, ), ^, =, +, &)",
            },
            minLength: {
              value: 8,
              message: "password most be minimum 8 characters",
            },
            maxLength: {
              value: 20,
              message: "password most be maximum 20 characters",
            },
          })}
          type="text"
          placeholder="Enter Password"
        />
        {errors.password && (
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p>{message}</p>}
          />
        )}
      </div>
      <div>
        <input
          type="number"
          {...register("age", {
            min: {
              value: 18,
              message: "the age must be minimum 18",
            },
            max: {
              value: 99,
              message: "the age must be minimum 99",
            },
          })}
        />
        {errors.age && (
          <ErrorMessage
            errors={errors}
            name="age"
            render={({ message }) => <p>{message}</p>}
          />
        )}
      </div>
      <div>
        <label>
          Male
          <input type="radio" value="Male" checked {...register("gender")} />
        </label>
        <label>
          Female
          <input type="radio" value="Female" {...register("gender")} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
