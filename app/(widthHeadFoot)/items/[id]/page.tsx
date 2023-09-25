import React from "react"
import Image from "next/image"
import Link from "next/link"
import ItemCant from "@/components/Cart/Items/ItemCant/ItemCant"
import Related from "@/components/Related/Related"
import ItemStyles from "@/styles/Items/Item.module.css"
import { Slides1 } from "@/components/NewsCarousel/Slides/Slides1"
import { Slides2 } from "@/components/NewsCarousel/Slides/Slides2"
import { Slides3 } from "@/components/NewsCarousel/Slides/Slides3"

interface pageTypes{
  params: object
}
export default function item({ params }: pageTypes){

  // const { id } = params

  return(
    <main className={ItemStyles.mainContainer}>
      <div className={ItemStyles.itemContainer}>
        {/* <img src={} alt="" /> */}
        <article className={ItemStyles.itemPhotos}>
          <section>
            <div>foto1</div>
            <div>foto2</div>
          </section>
          <main className={ItemStyles.img}>
            <h1>Foto</h1>
          </main>
        </article>
        <article className={ItemStyles.itemPhotosMobile}>
          <main className={ItemStyles.img}>
            <h1>Foto</h1>
          </main>
          <section>
            <div>foto1</div>
            <div>foto2</div>
          </section>
        </article>
        <article className={ItemStyles.itemInfo}>
          <div className={ItemStyles.homeLink}>
            <Link href="/">Inicio</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <Link href="/items">Categoria</Link>
            <p>&nbsp;&#62;&nbsp;</p>
            <p>Item</p>
          </div>
          <h1>Nombre del articulo</h1>
          <h3>$0000,00</h3>
          <h4>Disponibilidad: Muchas/Pocas/Numero exacto</h4>
          <h4>Categoria: xxxxxxxx</h4>
          <h4>Marca: xxxxxx</h4>
          <section style={{display: 'flex', alignItems: 'center'}}>
            <ItemCant />
            <button style={{height: '30px', marginLeft: '50px', cursor: 'pointer'}}>Agregar al carrito</button>
          </section>
        </article>
      </div>
      <Related>
        <Slides1 />
        <Slides2 />
        <Slides3 />
        <Slides1 />
        <Slides2 />
        <Slides3 />
        <Slides1 />
      </Related>
    </main>
  )
}