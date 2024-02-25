import { NextRequest,NextResponse } from "next/server";

type Job = {
    id?: string;
    message: string;
};

let todoList: Job[] = [];
// let todoList: Job[] = [{id:1,message:"12345"}];

let count = 0;

export async function GET(request: NextRequest): Promise<any> {
    const url = new URL(request.url);
    const action = url.searchParams.get("action");
    // http://localhost:3000/api/todo?action=reset
    if (action == 'reset'){
        todoList = [];
    }
    return NextResponse.json(todoList);
}

export async function POST(request: NextRequest): Promise<any> {
    const {message}: Job = await request.json()
    count++;
    todoList = [...todoList,{id:count.toString(),message}];
    return NextResponse.json({result:"ok"});
}