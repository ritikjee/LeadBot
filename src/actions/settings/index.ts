"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function onGetSubscriptionPlan() {
  try {
    const user = await currentUser();
    if (!user) return;
    const plan = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });
    if (plan) return plan?.subscription?.plan;
  } catch (error) {
    console.log(error);
  }
}

export async function onGetAllAccountDomains() {
  const user = await currentUser();
  if (!user) return;
  try {
    const domains = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        domains: {
          select: {
            name: true,
            icon: true,
            id: true,
            customer: {
              select: {
                chatRoom: {
                  select: {
                    id: true,
                    live: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return { ...domains };
  } catch (error) {
    console.log(error);
  }
}
