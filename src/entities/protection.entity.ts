export interface Protection {
    /**
     * If true, prevents the Server from being deleted
     */
    delete: boolean
    /**
     * If true, prevents the Server from being rebuilt
     */
    rebuild: boolean
}