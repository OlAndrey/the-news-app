import Link from 'next/link'
import PropTypes from 'prop-types'

function NavLink({ category, isActive }) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navlink ${
        isActive &&
        'underline decoration-orange-400 underline-offset-4 font-bold text-lg'
      } `}
    >
      {category}
    </Link>
  )
}

NavLink.propTypes = {
  category: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default NavLink
