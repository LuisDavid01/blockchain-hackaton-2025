"use client";

import { SignIn, useUser } from "@clerk/nextjs";

export default function SignInPage() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center">
        <SignIn />
      </div>
    );
  }

  return <div>Welcome!</div>;
}
