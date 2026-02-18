import os from 'bare-os'
import path from 'bare-path'

const SOCKET_DIR_NAME = 'pearpass'

/**
 * Returns cross-platform IPC path.
 * Uses Pear.config.pearDir so both the desktop app and the bridge
 * resolve to the same path, and stays short enough for the 104-byte
 * macOS Unix-socket limit.
 * @param {string} socketName
 * @returns {string}
 */
export const getIpcPath = (socketName) => {
  if (os.platform() === 'win32') {
    return `\\\\?\\pipe\\${socketName}`
  }

  return path.join(Pear.config.pearDir, SOCKET_DIR_NAME, `${socketName}.sock`)
}
