

export const updateObjectInArray =( items,itemId, objPropName, newobjPropName)=>{
   return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newobjPropName}
        }
        return u
    })
}