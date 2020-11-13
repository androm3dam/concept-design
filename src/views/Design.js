import React from "react"
import Gallery from "../components/elements/Gallery"
import PriceCard from "../components/elements/PriceCard"
import Rates from "../components/elements/Rates"
import "../components/layout/style.css"
function Design() {
  return (
    <>
      <Gallery />
      <div
        style={{ textAlign: "center", marginTop: "2rem" }}
        className="reveal-from-bottom"
      >
        <div className="price-cards-line">
          <PriceCard
            price="$5.00"
            targetId="first"
            description="кв. м"
            selfId="all"
            headerUpper="ТАРИФ"
            headerLower="ВСЕМ-ВСЕМ"
            headerClass=""
          />
          <PriceCard
            price="$10.00"
            targetId="second"
            description="кв. м"
            selfId="eco"
            headerUpper="ТАРИФ"
            headerLower="ЭКОНОМ"
            headerClass=""
          />
          <PriceCard
            price="$25.00"
            targetId="third"
            description="кв. м"
            selfId="business"
            headerUpper="ТАРИФ"
            headerLower="БИЗНЕС"
            headerClass=""
          />
        </div>
        <div className="price-cards-line">
          <PriceCard
            price="$35.00"
            targetId="fourth"
            description="кв. м"
            selfId="business-plus"
            headerUpper="ТАРИФ"
            headerLower="БИЗНЕС ПЛЮС"
            headerClass=""
          />
          <PriceCard
            price="$350.00"
            targetId="sixth"
            description="Зависит от площади"
            selfId="complectation"
            headerUpper="УСЛУГА"
            headerLower="КОМПЛЕКТАЦИЯ"
            headerClass=""
          />
          <PriceCard
            price="$45.00"
            targetId="fifth"
            description="кв. м"
            headerClass=""
            selfId="business-ultra"
            headerUpper="ТАРИФ"
            headerLower="БИЗНЕС УЛЬТРА"
          />
        </div>
        <div className="price-cards-line">
          <PriceCard
            price="$350.00"
            targetId="seventh"
            selfId="author"
            description="Зависит от площади"
            headerClass="-small"
            headerUpper="УСЛУГА"
            headerLower="АВТОРСКИЙ НАДЗОР"
          />
          <PriceCard
            price="$300.00"
            targetId="eighth"
            description="Зависит от объема работ"
            selfId="agreement"
            headerUpper="УСЛУГА"
            headerLower="ПЕРЕПЛАНИРОВКА"
            headerClass="-small"
          />
          <PriceCard
            price="$25.00"
            targetId="ninth"
            description="Зависит от типа"
            selfId="consultation"
            headerUpper="УСЛУГА"
            headerLower="КОНСУЛЬТАЦИЯ ДИЗАЙНЕРА"
            headerClass="-small"
          />
        </div>
      </div>
      <div className="container" style={{ marginTop: "3rem" }}>
        <p>
          * Обращаем Ваше внимание, что, в соответствии с законодательством
          Республики Беларусь расчет за продаваемые товары осуществляется в
          белорусских рублях. Цены в иностранной валюте указаны для нерезидентов
          Республики Беларусь в случае заключения внешнеторгового договора.
        </p>
        <p>** Цены указаны в ознакомительных целях.</p>
      </div>
      <Rates />
    </>
  )
}

export default Design
