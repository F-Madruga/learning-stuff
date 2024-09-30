from typing import Union
from fastapi import FastAPI
from routes.private.main import router as private_router
from routes.public.main import router as public_router

app = FastAPI()

app.include_router(private_router, prefix="/api/v1_private")
app.include_router(public_router, prefix="/api/v1")
