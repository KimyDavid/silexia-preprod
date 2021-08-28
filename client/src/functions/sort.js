export function sortByOrder(obj) {
    obj.sort((a, b) => {
        const order1 = a.order;
        const order2 = b.order;
        if (order1 < order2) return -1;
        if (order1 > order2) return 1;
        return 0;
    });

    return obj;
}

export function sortById(obj) {
    obj.sort((a, b) => {
        const id1 = a.id;
        const id2 = b.id;
        if (id1 < id2) return -1;
        if (id1 > id2) return 1;
        return 0;
    });

    return obj;
}