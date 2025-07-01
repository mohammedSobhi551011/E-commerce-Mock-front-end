import { IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const EmailInput = () => {
  const [form, setForm] = useState<{ email: string }>({ email: "" });
  return (
    <form
      className="relative flex w-full max-w-[24rem] "
      onSubmit={(e) => {
        e.preventDefault();
        setForm({ email: "" });
      }}
    >
      <Input
        label="E-mail address"
        variant="standard"
        className="pr-20"
        autoComplete="new-password"
        containerProps={{
          className: "min-w-0",
        }}
        labelProps={{
          className: "font-noto-sans font-light",
        }}
        crossOrigin={undefined}
        value={form.email}
        onChange={(e) => {
          setForm({ email: e.target.value });
        }}
        required
      />
      <IconButton
        variant="text"
        className="!absolute right-0 top-0 rounded-none rounded-e-sm"
        type="submit"
      >
        <svg
          width="35"
          height="18"
          viewBox="0 0 35 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.107422 8.71919H33.3455M25.1841 0.553223L33.3465 8.71919L25.1841 16.8852"
            stroke="black"
            strokeWidth="0.944917"
          />
        </svg>
      </IconButton>
    </form>
  );
};
export const SearchInput = () => {
  const [form, setForm] = useState<{ searchKey: string }>({ searchKey: "" });
  return (
    <form
      className="relative flex w-[85%] ms-5"
      onSubmit={(e) => {
        e.preventDefault();
        setForm({ searchKey: "" });
      }}
    >
      <Input
        label="Search"
        variant="standard"
        className="pr-20"
        autoComplete="new-password"
        containerProps={{
          className: "min-w-0",
        }}
        labelProps={{
          className: "font-noto-sans font-light",
        }}
        crossOrigin={undefined}
        value={form.searchKey}
        onChange={(e) => {
          setForm({ searchKey: e.target.value });
        }}
      />
      <IconButton
        variant="text"
        className="!absolute right-0 top-0 rounded-none rounded-e-sm text-lg"
        type="submit"
      >
        <CiSearch />
      </IconButton>
    </form>
  );
};
