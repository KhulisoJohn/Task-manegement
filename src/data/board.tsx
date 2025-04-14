import { Columns } from "../types";
import { v4 as uuidv4 } from "uuid";

export function getRandomColors() {
    return {
        bg: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        text: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };
}

export const Board: Columns = {
        backlock: {
        name: "Backlock",
        items: [
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                { title: "urgent", ...getRandomColors() },
                { title: "low", ...getRandomColors() },
                ],
            },
        ],
        },

        pending: {
        name: "Pending",
        items: [
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            }
        ],
    },

    todo: {
        name: "To do",
        items: [
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            },
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            }
        ],
    },
        
        doing: {
        name: "Doing",
        items: [
            {
                id: uuidv4(),
                description: "Lorem ipsum do voluptatibus.",
                priority: "high",
                deadline: 16,
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
                title: "update the design system",
            },
        ],
    },

    done: {
        name: "Done",
        items: [
            {
                id: uuidv4(),
                title: "Lorem ipsum dolor sit amet.",
                description: "Lorem ipsum dolor sit amet.",
                priority: "low",
                deadline: 16,
                image: "/images/1.png",
                alt: "Lorem ipsum dolor sit amet.",
                tags: [
                    { title: "urgent", ...getRandomColors() },
                    { title: "low", ...getRandomColors() },
                ],
            },
        ],
    },
}