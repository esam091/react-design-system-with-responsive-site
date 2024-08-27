import { SVGProps } from "react";

export default function InfoCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="outlined"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.999 2.01434C6.47622 2.01434 1.99902 6.49134 1.99902 12.0143C1.99902 17.5373 6.47622 22.0143 11.999 22.0143C17.5218 22.0143 21.999 17.5373 21.999 12.0143C21.999 6.49134 17.5218 2.01434 11.999 2.01434ZM11.999 4.01434C16.4173 4.01434 19.999 7.59634 19.999 12.0143C19.999 16.4323 16.4173 20.0143 11.999 20.0143C7.58072 20.0143 3.99902 16.4323 3.99902 12.0143C3.99902 7.59634 7.58072 4.01434 11.999 4.01434ZM11.999 7.01434C11.4467 7.01434 10.999 7.46234 10.999 8.01434C10.999 8.56634 11.4467 9.01434 11.999 9.01434C12.5513 9.01434 12.999 8.56634 12.999 8.01434C12.999 7.46234 12.5513 7.01434 11.999 7.01434ZM11.999 10.0143C11.4467 10.0143 10.999 10.4623 10.999 11.0143V16.0143C10.999 16.5663 11.4467 17.0143 11.999 17.0143C12.5513 17.0143 12.999 16.5663 12.999 16.0143V11.0143C12.999 10.4623 12.5513 10.0143 11.999 10.0143Z"
        className="outlined"
      />
    </svg>
  );
}
