/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Binary, Executable, Path } from '@minimouli/framework'
import Compiler from './objects/Compiler'

suite('Medium Format', () => {

    test('Multiple octal formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium-format/octal_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[12345     ]'])
    })

    test('Multiple decimal formating #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium-format/decimal_formating1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[   42]'])
    })

    test('Multiple decimal formating #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium-format/decimal_formating2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[+42       ]'])
    })

    test('Multiple hexadecimal formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium-format/hexadecimal_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[1234567]'])
    })

    test('Multiple character formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium-format/character_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[a    ]'])
    })

    test('Multiple string formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/medium-format/string_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[hello world         ]'])
    })

})
