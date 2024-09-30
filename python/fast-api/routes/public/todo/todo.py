from fastapi import APIRouter

from fastapi import APIRouter
from entities.todo import Todo

router = APIRouter()

@router.post("/")
def create_one(todo: Todo):
    return todo
