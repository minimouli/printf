/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Binary, Executable, Path } from '@minimouli/framework'
import Compiler from './objects/Compiler'

suite('Hard Format', () => {

    test('Multiple binary formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/hard-format/binary_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['11000000111001'])
    })

    test('Multiple decimal formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/hard-format/decimal_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['12345'])
    })

    test('Multiple hexadecimal formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/hard-format/hexadecimal_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['12345'])
    })

    test('Hexadecimal long formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/hard-format/hexadecimal_long_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['55555555'])
    })

    test('Escape formating #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/hard-format/escape_formating1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['%'])
    })

    test('Escape formating #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/hard-format/escape_formating2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['%'])
    })

})
