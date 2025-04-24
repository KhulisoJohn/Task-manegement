

export const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...destColumn.items];
        const destItems = [...sourceColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
        ...columns,
        [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
        },
        [source.droppableId]: {
            ...destColumn,
            items: destItems
        },
    });
} else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.slice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...column,[source.droppableId]: {
                ...column,items:copiedItems
            }
        })
    };
};