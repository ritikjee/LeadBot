"use server";

import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { onGetAllAccountDomains } from "../settings";

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const registered = await db.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    });

    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error) {
    return { status: 400 };
  }
};

export async function onLoginUser() {
  try {
    const user = await currentUser();
    if (!user) return redirectToSignIn();
    const authenticated = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    });
    if (authenticated) {
      const domains = await onGetAllAccountDomains();
      return { status: 200, user: authenticated, domain: domains?.domains };
    }
  } catch (error) {
    return { status: 400 };
  }
}
