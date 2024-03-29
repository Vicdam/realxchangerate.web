from typing import Optional, List

from sqlalchemy.orm import Session
from sqlalchemy import desc
from app.crud.base import CRUDBase
from app.models.rate import Rate
# from app.schemas.currency import Currency as currency_schema
from app.schemas.rate import RateCreate, RateBase


class CRUDRate(CRUDBase[Rate, RateCreate, RateBase]):
    # Declare model specific CRUD operation methods.

    def get_rate_by_currency_id(self, db: Session, currency_id: int) -> Optional[Rate]:
        """
        Gets the latest rate of a currency using the currency_id.
        """
        return (
            db.query(Rate)
            .filter(Rate.currency_id == currency_id)
            .order_by(desc(Rate.id))
            .first()
        )


rate = CRUDRate(Rate)
