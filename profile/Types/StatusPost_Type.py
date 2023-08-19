from pydantic import BaseModel
from typing import Optional

class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None

class StatusPost(BaseModel):
    serial: str
    user: str
    post: str
    date: str
    ## optional fields
    feeling: Optional[str] = None
    location: Optional[str] = None
    tag: Optional[str] = None