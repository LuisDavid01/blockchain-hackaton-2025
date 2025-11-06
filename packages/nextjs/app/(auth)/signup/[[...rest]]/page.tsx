"use client";

import { SignUp, useUser } from "@clerk/nextjs";

export default function SignInPage() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center">
        <SignUp />
      </div>
    );
  }

  return <div>Welcome!</div>;
}
