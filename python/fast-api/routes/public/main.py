from fastapi import APIRouter
from routes.public.todo import todo

router = APIRouter()
router.include_router(todo.router, prefix="/todo")
