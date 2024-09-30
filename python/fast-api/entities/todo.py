from pydantic import BaseModel
from datetime import datetime

class Todo(BaseModel):
    title: str
    done: bool
    createdAt: datetime
