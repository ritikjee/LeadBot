"use server";

import { db } from "@/lib/db";

export async function onToggleRealtime(id: string, state: boolean) {
  try {
    const chatRoom = await db.chatRoom.update({
      where: {
        id,
      },
      data: {
        live: state,
      },
      select: {
        id: true,
        live: true,
      },
    });

    if (chatRoom) {
      return {
        status: 200,
        message: chatRoom.live
          ? "Realtime mode enabled"
          : "Realtime mode disabled",
        chatRoom,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function onGetConversationMode(id: string) {
  try {
    const mode = await db.chatRoom.findUnique({
      where: {
        id,
      },
      select: {
        live: true,
      },
    });
    console.log(mode);
    return mode;
  } catch (error) {
    console.log(error);
  }
}
