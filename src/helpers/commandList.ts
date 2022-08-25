import command from "./command";

const commandList: command[] = [
    {
        name: "concat",
        values: 100,
        type: "String"
    },
    {
        name: "endsWith",
        values: 2,
        type: "String"
    },
    {
        name: "formatNumber",
        values: 3,
        type: "String"
    },
    {
        name: "equals",
        values: 2,
        type: "Logical"
    }
]

export default commandList;