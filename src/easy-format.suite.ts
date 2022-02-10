/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Binary, Executable, Path } from '@minimouli/framework'
import Compiler from './objects/Compiler'

suite('Easy Format', () => {

    test('Octal alternate formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/octal_alternate_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['012345'])
    })

    test('Hexadecimal alternate formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/hexadecimal_alternate_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['0x12345'])
    })

    test('Decimal alternate formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/decimal_alternate_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42'])
    })

    test('Decimal zero-padding formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/decimal_zero_padding_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42'])
    })

    test('Decimal blank-padding formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/decimal_blank_padding_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput([' 42'])
    })

    test('Decimal left-padding formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/decimal_left_padding_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['   42'])
    })

    test('Decimal left-align formating', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/decimal_left_align_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42'])
    })

    test('Sign formating on positive integer', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/positive_int_sign_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['+42'])
    })

    test('Sign formating on negative integer', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy-format/negative_int_sign_formating.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['-42'])
    })

})
