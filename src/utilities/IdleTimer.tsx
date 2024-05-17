import { useState } from "react"
import { useIdleTimer } from "react-idle-timer"

/**
 * @param idleTime - number of seconds to wait before user is logged out
 */
const useIdleTimeout = ({idleTime = 1 }) => {
    const idleTimeout =  idleTime;
    const [isIdle, setIdle] = useState(false)
    const logout = () => {
        sessionStorage.removeItem('token')
    }
    const handleIdle = () => {
        setIdle(true)
        logout()
    }
    const idleTimer = useIdleTimer({
        timeout: idleTimeout,
        onIdle: handleIdle,
        debounce: 500
    })
    return {
        isIdle,
        setIdle,
        idleTimer
    }
}
export default useIdleTimeout;