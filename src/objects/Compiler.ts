/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as child_process from 'child_process'
import { Binary, File, Path } from '@minimouli/framework'

class Compiler {

    private sources: string[]

    private executablePath: Path | null = null

    constructor(sources: Path[]) {
        this.sources = sources.map(source => source.toString())
    }

    async compile(): Promise<void> {

        const executableFile = await File.tmp()
        this.executablePath = executableFile.path

        const { status } = child_process.spawnSync('gcc', [
            ...this.sources,
            '-L.', '-lmy', '-o', executableFile.toString()
        ], {
            cwd: Path.fromProject('.').toString()
        })

        if (status !== 0)
            throw new Error('The test cannot be performed due to a compilation problem.')
    }

    getExecutablePath(): Path {

        if (!this.executablePath)
            throw new Error('The binary is not compiled.')

        return this.executablePath
    }

}

export default Compiler
