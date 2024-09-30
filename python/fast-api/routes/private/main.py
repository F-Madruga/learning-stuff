from fastapi import APIRouter
from routes.private.healthcheck import healthcheck

router = APIRouter()
router.include_router(healthcheck.router, prefix="/healthcheck")
