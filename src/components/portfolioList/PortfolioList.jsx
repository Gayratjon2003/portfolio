import './portfolioList.scss'

export default function PortfolioList({id,title, active, setSelected}) {
  return (
    <li className={active ? "portfolioList active": "portfolioList"} key={id}
    onClick={()=> setSelected(id) }
    >
      {title}
    </li>
  )
}
