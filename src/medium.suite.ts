/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Binary, Executable, Path } from '@minimouli/framework'
import Compiler from './objects/Compiler'

suite('Medium', () => {

    test('Multiple positive integer display', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium/multiple_positive_integer_display.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42 2147483647'])
    })

    test('Multiple negative integer display', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium/multiple_negative_integer_display.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['-42 -2147483648'])
    })

    test('Multiple decimal display', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium/multiple_decimal_display.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['0 1 2 3 4 5 6 7 8 9 10'])
    })

    test('Multiple string display', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium/multiple_string_display.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['The answer to life, the universe and everything'])
    })

    test('Mixed display #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium/mixed_display1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42 = forty-two'])
    })

    test('Mixed display #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium/mixed_display2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['123 456 0x789'])
    })

})
